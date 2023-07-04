import { Fragment } from "react";
import PublicPageHeader from "./PublicPageHeader";

const PublicPagesLayout = ({ children }) => {
    return <Fragment>
        <PublicPageHeader />
        {children}
    </Fragment>
}

export default PublicPagesLayout;