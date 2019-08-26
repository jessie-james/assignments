import React from "react";
import styled from "styled-components";

function First() {
    return (
        <Wrapper>
            <span>First</span>
            <section>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
          {/* omitted */}
                </p>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #00d38a;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default First;