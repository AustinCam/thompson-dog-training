// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import logo from "./logo";
import navigation from "./navigation";
import home from "./home";
import product from "./product";
import productpage from "./productpage";
import aboutpage from "./aboutpage";
import contactpage from "./contactpage";
import footer from "./footer";

import localeString from "./locale/String";
import localeText from "./locale/Text";
import localeBlockContent from "./locale/BlockContent";
import tile from "./locale/Tile";
import HomeContentLayout from "./locale/HomeContentLayout";
import link from "./locale/Link";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    logo,
    navigation,
    home,
    aboutpage,
    productpage,
    product,
    contactpage,
    footer,
    // link,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    tile,
    HomeContentLayout,
    link,
  ]),
});
