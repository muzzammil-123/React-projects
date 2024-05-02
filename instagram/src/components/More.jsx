import React from "react";
import styled from "styled-components";

export default function More() {
  return (
    <>
      <Wrapper>
        <Wrap>
          <Item>
            <Icon>
              <svg
                aria-label="Settings"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="18"
                role="img"
                viewBox="0 0 24 24"
                width="18"
              >
                <title>Settings</title>
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="8.635"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
                <path
                  d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </Icon>
            <div>Settings</div>
          </Item>
        </Wrap>
        <Wrap>
          <Item>
            <Icon>
              <svg
                aria-label="Your activity"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="18"
                role="img"
                viewBox="0 0 24 24"
                width="18"
              >
                <title>Your activity</title>
                <path d="M19 1H5C2.794 1 1 2.794 1 5v14c0 2.206 1.794 4 4 4h14c2.206 0 4-1.794 4-4V5c0-2.206-1.794-4-4-4ZM5 3h14c1.103 0 2 .897 2 2v6h-2.382l-2.723-5.447c-.34-.678-1.45-.678-1.79 0L9 15.764l-2.105-4.211A1 1 0 0 0 6 11H3V5c0-1.103.897-2 2-2Zm14 18H5c-1.103 0-2-.897-2-2v-6h2.382l2.723 5.447a1 1 0 0 0 1.79 0L15 8.236l2.105 4.211A1 1 0 0 0 18 13h3v6c0 1.103-.897 2-2 2Z"></path>
              </svg>
            </Icon>
            <div>Your activity</div>
          </Item>
        </Wrap>
        <Wrap>
          <Item>
            <Icon>
              <svg
                aria-label="Saved"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="18"
                role="img"
                viewBox="0 0 24 24"
                width="18"
              >
                <title>Saved</title>
                <polygon
                  fill="none"
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </Icon>
            <div>Saved</div>
          </Item>
        </Wrap>
        <Wrap>
          <Item>
            <Icon>
              <svg
                aria-label="Theme icon"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="18"
                role="img"
                viewBox="0 0 24 24"
                width="18"
              >
                <title>Theme icon</title>
                <path d="M11.502,22.99805A11.4313,11.4313,0,0,1,.49512,14.83691a.99889.99889,0,0,1,.251-.998,1.01148,1.01148,0,0,1,.99707-.249,9.43041,9.43041,0,0,0,2.75879.40821A9.5082,9.5082,0,0,0,13.5957,1.74023a1.00039,1.00039,0,0,1,1.24707-1.248A11.501,11.501,0,0,1,11.502,22.99805ZM3.08984,15.91211A9.49991,9.49991,0,0,0,21.002,11.498,9.57875,9.57875,0,0,0,15.916,3.08594,11.5083,11.5083,0,0,1,3.08984,15.91211Z"></path>
              </svg>
            </Icon>
            <div>Switch appearance</div>
          </Item>
        </Wrap>
        <Wrap style={{borderBottom: '5px solid #353535', borderRadius : '0px', paddingBottom: '20px'}}>
          <Item>
            <Icon>
              <svg
                aria-label="Report a problem"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="18"
                role="img"
                viewBox="0 0 24 24"
                width="18"
              >
                <title>Report a problem</title>
                <path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path>
              </svg>
            </Icon>
            <div>Report a problem</div>
          </Item>
        </Wrap>
        <Wrap style={{borderBottom: '1px solid #353535', borderRadius : '0px ', height: '50px', margin: '5px', padding: '30px 20px'}}>
          <Item>
            <div>Switch account</div>
          </Item>
        </Wrap>
        <Wrap style={{height: '50px', margin: '5px' ,padding: '30px 20px'}}>
          <Item>
            <div>Log out</div>
          </Item>
        </Wrap>
      </Wrapper>
    </>
  );
}

let Wrapper = styled.div`
  position: fixed;
  top: 310px;
  padding: 8px;
  right: 0;
  left: 20px;
  width: 260px;
  z-index: 10;
  height: 415px;
  background-color: #262626;
  border-radius: 15px;
`;

let Wrap = styled.div`
  width: 100%;
  /* border: 1px solid white; */
  padding: 16px;
  display: flex;
  align-items: center;
  border-radius: 15px;

  &:hover {
    background-color: #333;
  }
`;

let Item = styled.div`
  /* border: 1px solid white; */
  display: flex;
  height: 18px;
  align-items: center;
  gap: 10px;
  font-size: 16px;

  div {
    font-size: 14px;
    font-weight: 400;
    color: #f5f5f5;
  }
`;

let Icon = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
