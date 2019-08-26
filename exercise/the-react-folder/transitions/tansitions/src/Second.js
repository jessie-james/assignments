
import React from "react";
import styled from "styled-components";

function Second() {
    return (
        <Wrapper>
            <span>Second</span>
            <section>
                <p>
                    Morbi sodales at enim sed porttitor.
          {/* omitted */}
                </p>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #00bfff;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default Second;