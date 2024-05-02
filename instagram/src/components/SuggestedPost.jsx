import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function SuggestedPost() {
  let arr = [
    { reels: "/reels/Video-416.mp4" },
    { reels: "/reels/Video-563.mp4" },
    { reels: "/reels/Video-955.mp4" },
    { reels: "/reels/Video-505.mp4" },
  ];
  let [muted, setMuted] = useState(true);
  let toggle = () => {
    setMuted(!muted);
  };

  let [like, setLike] = useState(false);
  let likePost = () => {
    setLike(!like);
  };

  let [comment, setComment] = useState("");
  let [comments, setComments] = useState([]); // State to store comments

  let onchange = (e) => {
    setComment(e);
  };

  let addComment = (e) => {
    if (e.key === "Enter" && comment.length > 0) {
      setComments([comment]); // Add the new comment to the comments state
      setComment(""); // Clear the comment input field
    }
  };

  
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    console.log(hoveredIndex);
  }, [hoveredIndex]);


  return (
    <>
      <Container>
        <Content>
          <Heading>Suggested Posts</Heading>
          {arr.map((item, index) => {
            return (
              <Post key={index}>
                <Profile>
                  <Wrap>
                    <Image>
                      <img src="img5.jpg" alt="" />
                    </Image>
                    <Name>
                      <div>
                        born2shine18{" "}
                        <span style={{ color: "#a8a8a8", fontSize: "14px" }}>
                          • 7w •
                        </span>{" "}
                        <span style={{ color: "#0095f6", fontSize: "14px" }}>
                          Follow
                        </span>
                      </div>
                      <div style={{ fontSize: "12px" }}>
                        shreyashidebnathofficial • Original audio
                      </div>
                    </Name>
                  </Wrap>
                  <More>
                    <svg
                      aria-label="More options"
                      class="x1lliihq x1n2onr6 x5n08af"
                      fill="currentColor"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>More options</title>
                      <circle cx="12" cy="12" r="1.5"></circle>
                      <circle cx="6" cy="12" r="1.5"></circle>
                      <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                  </More>
                </Profile>
                <Reel
                  onMouseEnter={() =>{ setHoveredIndex(index)}}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <video
                    src={item.reels}
                    playsInline={true}
                    autoPlay={false}
                    controls={false}
                    loop={true}
                    muted={muted}
                    style={{
                      filter: hoveredIndex !== index ? "blur(3px)" : "none",
                    }}
                    ref={(video) => {
                      if (video) {
                        if (hoveredIndex === index) {
                          video.play();
                        } else {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }
                    }}
                  ></video>
                  <Mute onClick={toggle}>
                    <div>
                      <svg
                        aria-label="Tags"
                        class="x1lliihq x1n2onr6 x9bdzbf"
                        fill="currentColor"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <title>Tags</title>
                        <path d="M21.334 23H2.666a1 1 0 0 1-1-1v-1.354a6.279 6.279 0 0 1 6.272-6.272h8.124a6.279 6.279 0 0 1 6.271 6.271V22a1 1 0 0 1-1 1ZM12 13.269a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Z"></path>
                      </svg>
                    </div>
                    <div>
                      {" "}
                      {muted ? (
                        <svg
                          aria-label="Audio is muted"
                          class="x1lliihq x1n2onr6 x9bdzbf"
                          fill="currentColor"
                          height="12"
                          role="img"
                          viewBox="0 0 48 48"
                          width="12"
                        >
                          <title>Audio is muted</title>
                          <path
                            clip-rule="evenodd"
                            d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          aria-label="Audio is playing"
                          class="x1lliihq x1n2onr6 x9bdzbf"
                          fill="currentColor"
                          height="12"
                          role="img"
                          viewBox="0 0 24 24"
                          width="12"
                        >
                          <title>Audio is playing</title>
                          <path d="M16.636 7.028a1.5 1.5 0 1 0-2.395 1.807 5.365 5.365 0 0 1 1.103 3.17 5.378 5.378 0 0 1-1.105 3.176 1.5 1.5 0 1 0 2.395 1.806 8.396 8.396 0 0 0 1.71-4.981 8.39 8.39 0 0 0-1.708-4.978Zm3.73-2.332A1.5 1.5 0 1 0 18.04 6.59 8.823 8.823 0 0 1 20 12.007a8.798 8.798 0 0 1-1.96 5.415 1.5 1.5 0 0 0 2.326 1.894 11.672 11.672 0 0 0 2.635-7.31 11.682 11.682 0 0 0-2.635-7.31Zm-8.963-3.613a1.001 1.001 0 0 0-1.082.187L5.265 6H2a1 1 0 0 0-1 1v10.003a1 1 0 0 0 1 1h3.265l5.01 4.682.02.021a1 1 0 0 0 1.704-.814L12.005 2a1 1 0 0 0-.602-.917Z"></path>
                        </svg>
                      )}
                    </div>
                  </Mute>
                </Reel>
                <Like>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Parent>
                      <div onClick={() => likePost()}>
                        {like ? (
                          <svg
                            aria-label="Unlike"
                            class="x1lliihq x1n2onr6 xxk16z8"
                            fill="red"
                            height="24"
                            role="img"
                            viewBox="0 0 48 48"
                            width="24"
                          >
                            <title>Unlike</title>
                            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                        ) : (
                          <svg
                            fill="currentColor"
                            aria-label="Like"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <title>Like</title>
                            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                          </svg>
                        )}
                      </div>
                      <div>
                        <svg
                          aria-label="Comment"
                          class="x1lliihq x1n2onr6 x5n08af"
                          fill="currentColor"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Comment</title>
                          <path
                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <svg
                          aria-label="Share Post"
                          class="x1lliihq x1n2onr6 x5n08af"
                          fill="currentColor"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Share Post</title>
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="22"
                            x2="9.218"
                            y1="3"
                            y2="10.083"
                          ></line>
                          <polygon
                            fill="none"
                            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></polygon>
                        </svg>
                      </div>
                    </Parent>
                    <div>
                      <svg
                        aria-label="Save"
                        class="x1lliihq x1n2onr6 x5n08af"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Save</title>
                        <polygon
                          fill="none"
                          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                  <div style={{ marginTop: "2px" }}>638,196 likes</div>
                </Like>
                <Comment>
                  <Text>
                    btw_teeb{" "}
                    <span style={{ fontWeight: "400" }}>
                      Tag that friend 😀😂
                    </span>
                    <span style={{ fontWeight: "400", color: "#e0f1ff" }}>
                      {" "}
                      #reels #reelsinstagram #reelitfeelit #reelsindia
                      #reelviral #reelvideos
                    </span>
                  </Text>
                  <ViewAll>View all 315 comments</ViewAll>
                  {comments.map((comment, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          style={{ width: "100%", borderRadius: "50%" }}
                          src="img4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <div style={{ fontSize: "14px" }}>
                          _muz_zam_mil <span style={{}}>{comment}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <AddComment>
                    <input
                      type="text"
                      onChange={(e) => onchange(e.target.value)}
                      onKeyDown={(e) => {
                        addComment(e);
                      }}
                      placeholder="Add a Comment..."
                    />
                    {comment.length > 0 ? (
                      <Button
                        onClick={(e) => {
                          addComment({ key: "Enter" });
                        }}
                      >
                        Post
                      </Button>
                    ) : null}
                  </AddComment>
                </Comment>
              </Post>
            );
          })}
        </Content>
      </Container>
    </>
  );
}

let Container = styled.div`
  width: 470px;
  background-color: black;
  /* border: 2px solid black; */
  height: 100%;
`;

let Content = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: aliceblue; */
`;

let Heading = styled.div`
  width: 100%;
  height: 50px;
  color: aliceblue;
  font-size: 20px;
  font-weight: 500;
`;

let Post = styled.div`
  width: 100%;
  height: 815px;
  padding-bottom: 16px;
  margin-bottom: 20px;
  border-bottom: 2px solid #262626;
`;

let Profile = styled.div`
  width: 100%;
  height: 36px;
  padding: 0px 0px 0px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

let Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
`;

let Image = styled.div`
  width: 36px;
  height: 36px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

let Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-size: 14px;
`;

let More = styled.div`
  width: 24px;

  height: 24px;
`;

let Reel = styled.div`
  width: 100%;
  padding: 10px 0px;
  position: relative;
  height: 585px;
  /* border: 1px solid green; */
  video {
    width: 100%;
    height: 100%;
  }
`;

let Mute = styled.div`
  position: absolute;
  width: 100%;
  bottom: 15px;
  right: 0;
  display: flex;
  padding: 0px 30px;
  justify-content: space-between;
`;

let Like = styled.div`
  width: 470px;
  height: 40px;
  margin: 4px 0;
  /* border: 1px solid blue; */
  display: flex;
  font-size: 14px;
  flex-direction: column;
`;

let Parent = styled.div`
  display: flex;
  gap: 10px;
`;

let Comment = styled.div`
  /* border: 1px solid purple; */
  margin-top: 10px;
  height: 129px;
`;

let Text = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

let ViewAll = styled.div`
  color: #98a8a8;
  margin: 5px 0px;
  font-size: 14px;
`;

let AddComment = styled.div`
  font-size: 14px;
  margin: 5px 0px 5px;
  color: white;
  background-color: black;
  /* border: 2px solid; */
  display: flex;
  justify-content: space-between;
  input {
    background-color: black;
    border: none;

    &:focus {
      outline: none;
    }
  }

  input::placeholder {
    color: #98a8a8;
  }
`;

let Button = styled.div`
  color: #367df8;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
`;
