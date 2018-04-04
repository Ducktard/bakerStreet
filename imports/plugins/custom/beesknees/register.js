import { Reaction } from "/server/api";

Reaction.registerPackage({
    label: "Bees Knees",
    name: "beesknees",
    icon: "fa fa-vine",
    layout: [{
        layout: "coreLayoutBeesknees",
        workflow: "coreProductGridWorkflow",
        collection: "Products",
        theme: "default",
        enabled: true,
        structure: {
          template: "productsLanding",
          layoutHeader: "NavBar",
          layoutFooter: "Footer",
          notFound: "productNotFound",
          dashboardHeader: "",
          dashboardControls: "dashboardControls",
          dashboardHeaderControls: "",
          adminControlsFooter: "adminControlsFooter"
        }
      }],
    autoEnable: true
});