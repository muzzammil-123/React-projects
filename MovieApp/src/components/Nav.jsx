import styled from 'styled-components'
import { FaFireFlameCurved } from "react-icons/fa6";

export default function Nav() {
    return (
        <>
            <Container >
                <Content className="col-12">
                    <SideBar>
                        <Logo>
                            <img src="/tv-line.svg" alt="" />
                            <span>SCSDB.</span>
                        </Logo>
                        <NewFeed>
                            <Title>New Feeds</Title>
                            <Wrap>
                                <Items href='/trending'>
                                    <div>
                                        <FaFireFlameCurved />
                                    </div>
                                    <div>Trending</div>
                                </Items>
                            </Wrap>
                            <Wrap>
                                <Items href='/popular'>
                                    <div>
                                        <img src="/star.svg" alt="" />
                                    </div>
                                    <div>Popular</div>
                                </Items>
                            </Wrap>
                            <Wrap>
                                <Items href='/movie'>
                                    <div>
                                        <img src="/movie.svg" alt="" />
                                    </div>
                                    <div>Movies</div>
                                </Items>

                            </Wrap>
                            <Wrap>
                                <Items href='/tv'>
                                    <div>
                                        <img src="/tv.svg" alt="" />
                                    </div>
                                    <div>Tv Shows</div>
                                </Items>
                            </Wrap>
                            <Wrap>
                                <Items>
                                    <div>
                                        <img src="/people.svg" alt="" />
                                        </div>
                                    <div>People</div>
                                </Items>

                            </Wrap>
                        </NewFeed>
                    </SideBar>
                </Content>
            </Container>
        </>
    )
}

let Container = styled.div`
background-color: #1f1e24;
width: 305px;
border-right: 1px solid white;
`


let Content = styled.div`
width : 100%;
padding:2.5rem;

`

let SideBar = styled.div`
width: 100%;
height : 100%;
`

let Wrap = styled.div`
width:100%;
height: 100%;

&:hover{
    background-color: #6556cd;
    border-radius: 10px;
    cursor:pointer;
    color:white !important;

    div{

    }

    div{
        color:white !important;
    }
}
`

let Items = styled.a`
text-decoration: none;
padding:20px;
color: #626169;
display: flex;
align-items: center;
gap: 10px;
font-size: 1.1rem;
font-weight: 500;
div{
img{
    width: 25px;
}
}
`

let NewFeed = styled.div`
`

let Title = styled.div`
color: white;
margin-top: 40px;
margin-bottom: 20px;
font-size: 1.3rem;
font-weight:600;
`

let Logo = styled.div`
display: flex;
gap: 5px;
align-items: center;    
    
img{
    width: 25px;
}

    span{
        font-size: 1.3rem;
        line-height: 2rem;
        font-weight: 700;
        color: white;   
    }
`