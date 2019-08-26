
import React from "react";
import styled from "styled-components";

function Third() {
    return (
        <Wrapper>
            <span>Third</span>
            <section>
                <p>
                    Curabitur eu feugiat magna, ut malesuada est.
          {/* omitted */}
                </p>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #f76565;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default Third;