import * as React from "react";
import { MatchedRoute, renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";

type ParentPageProps = {};

export const ParentPage: React.FC<MatchedRoute<ParentPageProps>> = (props) => {
  return (
    <div>
      <h2>父页面</h2>
      <nav>
        <Link to={"/parent"}>链接 1</Link>
        {" | "}
        <Link to={"/parent/sub2"}>链接 2</Link>
      </nav>
      <section>{renderRoutes(props.route.routes)}</section>
    </div>
  );
};
