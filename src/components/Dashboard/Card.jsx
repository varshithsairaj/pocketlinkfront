import { useEffect } from "react";

const getYouTubeEmbedUrl = (url) => {
  try {
    const urlObj = new URL(url);
    let videoId = urlObj.searchParams.get("v");

    // Handle shortened YouTube URLs (e.g., youtu.be)
    if (!videoId && urlObj.hostname === "youtu.be") {
      videoId = urlObj.pathname.substring(1); // Extract video ID from the pathname
    }

    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    console.log("Generated YouTube Embed URL:", embedUrl); // Debugging the embed URL
    return embedUrl;
  } catch (error) {
    console.error("Error parsing YouTube URL:", url, error);
    return url;
  }
};

const loadScript = (src, id, callback) => {
  if (!document.getElementById(id)) {
    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    script.async = true;
    script.onload = callback;
    document.body.appendChild(script);
  } else if (callback) {
    callback();
  }
};

export function Card({ title, link, type }) {
  console.log("Card Props - Title:", title); // Debugging title
  console.log("Card Props - Link:", link); // Debugging link
  console.log("Card Props - Type:", type); // Debugging type

  // Normalize the type to lowercase
  const normalizedType = type?.toLowerCase();

  // Format Twitter link if necessary
  const formattedTwitterLink =
    typeof link === "string" ? link.replace("x.com", "twitter.com") : "";

  // Load Twitter, Instagram, and Facebook scripts
  useEffect(() => {
    if (normalizedType === "twitter") {
      console.log("Loading Twitter embed script...");
      loadScript(
        "https://platform.twitter.com/widgets.js",
        "twitter-wjs",
        () => {
          if (window.twttr) {
            console.log("Initializing Twitter widgets...");
            window.twttr.widgets.load();
          } else {
            console.error("Twitter widgets not available.");
          }
        }
      );
    } else if (normalizedType === "instagram") {
      console.log("Loading Instagram embed script...");
      loadScript("https://www.instagram.com/embed.js", "instagram-wjs", () => {
        if (window.instgrm) {
          console.log("Initializing Instagram embeds...");
          window.instgrm.Embeds.process();
        }
      });
    } else if (normalizedType === "facebook") {
      console.log("Loading Facebook SDK...");
      loadScript(
        "https://connect.facebook.net/en_US/sdk.js",
        "facebook-jssdk",
        () => {
          if (window.FB) {
            console.log("Initializing Facebook embeds...");
            window.FB.XFBML.parse();
          }
        }
      );
    }
  }, [normalizedType]);

  let content;

  switch (normalizedType) {
    case "youtube":
      console.log("Rendering YouTube content"); // Debugging YouTube case
      content = (
        <iframe
          className="w-full h-fit"
          style={{ aspectRatio: "16/9" }}
          draggable
          src={getYouTubeEmbedUrl(link)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      );
      break;
    case "twitter":
      console.log("Rendering Twitter content"); // Debugging Twitter case
      console.log("Formatted Twitter Link:", formattedTwitterLink); // Debugging formatted link
      content = (
        <blockquote className="twitter-tweet">
          <a href={formattedTwitterLink}>{formattedTwitterLink}</a>
        </blockquote>
      );
      break;
    case "facebook":
      console.log("Rendering Facebook content"); // Debugging Facebook case
      content = (
        <div className="fb-post" data-href={link} data-width="500"></div>
      );
      break;
    case "instagram":
      console.log("Rendering Instagram content"); // Debugging Instagram case
      content = (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={link}
          data-instgrm-version="14"
        ></blockquote>
      );
      break;
    default:
      console.log("Unsupported content type:", normalizedType); // Debugging default case
      content = <p>Unsupported content type.</p>;
  }

  return (
    <div className="bg-white font-light border rounded-md shadow-md border-gray-200 break-inside-avoid">
      <div className="p-2 flex justify-between items-center">
        <div>{title}</div>
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            🔗
          </a>
        </div>
      </div>
      <div className="p-2">{content}</div>
    </div>
  );
}

export default Card;
