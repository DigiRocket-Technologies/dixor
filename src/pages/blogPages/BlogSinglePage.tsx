import LayoutV1 from "../../components/layouts/LayoutV1";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogContentNew from "../../components/blog/BlogContentNew";
import { useEffect, useState } from "react";

type Script = {
  src?: string;
  content?: string;
  attrs: Record<string, string>;
};

const BlogSinglePage = () => {
    
  const [blogData, setBlogData] = useState({
    title: "",
    slug:"",
    h1:"",
    metaDescription: "",
    scripts: [],
    content: "",
  });
  const [parsedScripts, setParsedScripts] = useState<Script[]>([]);

  function parseScriptTag(scriptString: string): {
    src?: string;
    content?: string;
    attrs: Record<string, string>;
  } | null {
    const div = document.createElement("div");
    div.innerHTML = scriptString.trim();
    const script = div.querySelector("script");
    if (!script) return null;

    const attrs: Record<string, string> = {};
    for (const attr of script.attributes) {
      attrs[attr.name] = attr.value;
    }

    return {
      src: script.getAttribute("src") || undefined,
      content: script.textContent || undefined,
      attrs,
    };
  }

  const getBlogDetails = async (slug:string) => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/getblogdetails/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data.blog);
    setBlogData(data.blog);

    for (let i = 0; i < data.blog.scripts.length; i++) {
      const script = parseScriptTag(data.blog.scripts[i]);

      setParsedScripts((scripts: any) => [...scripts, script]);
    }
  };

  const { slug } = useParams();
  console.log(slug)
  useEffect(() => {
    if(slug)
    getBlogDetails(slug);
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{blogData?.title}</title>
        <link rel="canonical" href="https://digirocket.io/blog/:slug" />
        <meta name="description" content={blogData?.metaDescription}></meta>
        {parsedScripts.map((script, idx) =>
          script.src ? (
            <script key={idx} src={script.src} {...script.attrs} />
          ) : (
            <script key={idx} {...script.attrs}>
              {script.content}
            </script>
          )
        )}
      </Helmet>

      <LayoutV1>
        <Breadcrumb title={blogData?.h1||"Blog-Single"} breadCrumb={blogData?.slug||"blog-single"} />
        {
          <BlogContentNew
            sectionClass="default-padding-bottom"
            blogData={blogData}
          />
        }
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default BlogSinglePage;