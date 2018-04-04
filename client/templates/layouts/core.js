import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Blaze from "meteor/gadicc:blaze-react-component";
import { Template } from "meteor/templating";

import { getComponent as assertComponent, registerComponent } from "/imports/plugins/core/components/lib";


class CoreLayoutBeesknees extends Component {
  static propTypes = {
    actionViewIsOpen: PropTypes.bool,
    data: PropTypes.object,
    structure: PropTypes.object
  }

  getComponent(name) {
    try {
      if (name) {
        return assertComponent(name);
      }
    } catch (error) {
      // No-op
    }
    return null;
  }

  renderMain() {
    const template = this.props.structure && this.props.structure.template;
    const mainComponent = this.getComponent(template);
    if (mainComponent) {
      return React.createElement(mainComponent, {});
    } else if (Template[template]) {
      return (
        <Blaze template={template} />
      );
    }
    return null;
  }

  render() {
    const { layoutHeader, layoutFooter, template } = this.props.structure || {};
    const pageClassName = classnames({
      "page": true,
      "show-settings": this.props.actionViewIsOpen
    });

    return (
      <div className={pageClassName} id="reactionAppContainer">
        { Template[layoutHeader] &&
          <Blaze template={layoutHeader} className="reaction-navigation-header" />
        }

        <Blaze template="cartDrawer" className="reaction-cart-drawer" />

        { Template[template] &&
          <main>
            <div className="rui beesknees">
              <div className="bkdebug"><em>{"Bee's Knees layout"}</em></div>
              <div className="bkdebug"><em>{"layoutHeader template:"}</em> {this.props.structure.layoutHeader}</div>
              <div className="bkdebug"><em>{"layoutFooter template:"}</em> {this.props.structure.layoutFooter}</div>
              <div className="bkdebug"><em>{"Main Template:"}</em> {this.props.structure.template}</div>
            </div>
            <Blaze template={template} />
          </main>
        }

        { Template[layoutFooter] &&
          <Blaze template={layoutFooter} className="reaction-navigation-footer footer-default" />
        }
      </div>
    );
  }
}

// Register component for it to be usable
registerComponent("coreLayoutBeesknees", CoreLayoutBeesknees);

export default CoreLayoutBeesknees;