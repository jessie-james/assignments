import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./Home";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

function Container({ location }) {
    return (
        <Wrapper>
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 3000, exit: 200 }}
                    classNames="fade"
                >
                    <section className="route-section">
                        <Switch location={location}>
                            <Route exact path="/" component={Home} />
                            <Route path="/first" component={First} />
                            <Route path="/second" component={Second} />
                            <Route path="/third" component={Third} />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    
      div.transition-group {
           position: relative;
      }
      section.route-section {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
      }
`;

export default withRouter(Container);