import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "antd";
interface Props {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
  noIcon?: boolean;
  path?: string;
  htmlType?: "reset" | "submit" | undefined;
}

function LocalButton({
  htmlType,
  title,
  onClick,
  width,
  loading,
  padding,
  path,
  noIcon,
}: Props) {
  const buttonStyle = {
    width: width ? width : "w-auto",
    padding: padding,
  };
  if (path && path.startsWith("#")) {
    return (
      <AnchorLink href={path}>
        <Button
          className={`ease group relative z-10 active:border-main active:text-main  box-border inline-flex cursor-pointer items-center justify-center overflow-hidden border rounded-none font-gothic text-[10px] border-main bg-primary px-6 py-5 text-main hover:bg-primary-100/80 transition-all duration-300 focus:outline-none`}
          htmlType={htmlType}
          style={buttonStyle}
          onClick={onClick}
          disabled={loading}
        >
          <span className="relative z-20 flex items-center uppercase">
            {noIcon && (
              <svg
                className="relative mr-2 h-5 w-5 flex-shrink-0 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            )}
            {loading ? "loading..." : title}
          </span>
        </Button>
      </AnchorLink>
    );
  } else if (path) {
    return (
      <Link to={path}>
        <Button
          className={`ease group relative rounded-none z-10 box-border inline-flex cursor-pointer items-center justify-center active:border-main active:text-main overflow-hidden border font-gothic text-[10px] border-main bg-primary px-6 py-5 text-main hover:bg-primary-100/80 transition-all duration-300 focus:outline-none`}
          htmlType={htmlType}
          style={buttonStyle}
          onClick={onClick}
          disabled={loading}
        >
          <span className="relative z-20 flex items-center uppercase">
            {noIcon && (
              <svg
                className="relative mr-2 h-5 w-5 flex-shrink-0 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            )}
            {loading ? "loading..." : title}
          </span>
        </Button>
      </Link>
    );
  } else {
    return (
      <Button
        className={`ease group relative rounded-none z-10 box-border inline-flex cursor-pointer items-center justify-center overflow-hidden border active:border-main active:text-main  font-gothic text-[10px] border-main bg-primary px-6 py-5 text-main hover:bg-primary-100/80 transition-all duration-300 focus:outline-none`}
        htmlType={htmlType}
        style={buttonStyle}
        onClick={onClick}
        disabled={loading}
      >
        <span className="relative z-20 flex items-center uppercase">
          {noIcon && (
            <svg
              className="relative mr-2 h-5 w-5 flex-shrink-0 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          )}
          {loading ? "loading..." : title}
        </span>
      </Button>
    );
  }
}

export default LocalButton;
