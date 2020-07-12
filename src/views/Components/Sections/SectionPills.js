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
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Navigation Pills</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "General Questions",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <ul>
                          <li>
                            <h4 className={classes.heading}>Tell me about youeself?</h4>
                            <p className={classes.textbox}>
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate B2C
                              users after installed base benefits.
                            </p>
                          </li>
                        </ul>
                      </span>
                    )
                  },
                  {
                    tabButton: "Company",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        
                      </span>
                    )
                  },
                  {
                    tabButton: "HTML",
                    tabIcon: CodeIcon,
                    tabContent: (
                      <span>

                      </span>
                    )
                  },
                  {
                    tabButton: "CSS",
                    tabIcon: CodeIcon,
                    tabContent: (
                      <span>

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
