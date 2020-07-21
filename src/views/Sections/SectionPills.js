import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import CodeIcon from '@material-ui/icons/Code';
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/CardSection/CardSection.js";
import General from "components/Accordion/General.js";
import Company from "components/Accordion/Company.js";
import Html from "components/Accordion/Html.js";
import Css from "components/Accordion/Css.js";

import styles from "assets/jss/material-kit-react/views/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Questions & Answers</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "General",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <General />
                      </span>
                    )
                  },
                  {
                    tabButton: "Company",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <Company />
                      </span>
                    )
                  },
                  {
                    tabButton: "HTML",
                    tabIcon: CodeIcon,
                    tabContent: (
                      <span>
                        <Html />
                      </span>
                    )
                  },
                  {
                    tabButton: "CSS",
                    tabIcon: CodeIcon,
                    tabContent: (
                      <span>
                        <Css />
                      </span>
                    )
                  },
                  {
                    tabButton: "Tasks",
                    tabIcon: List,
                    tabContent: (
                      <span>

                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
