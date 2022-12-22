import styled from "styled-components";
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';
import { useLocation } from 'react-router-dom';

const users = [...Array(10).keys()].map(((val)=>{
    return {
        id:val,
        name:`たかし-${val}`,
        image:"https://source.unsplash.com/ZCHj_2lJP00",
        email:"sample@email.com",
        phone:"090-9755-0012",
        company:{
          name:"テスト株式会社"},
        website:"http://sample.com"
    }
}));


export const Users = () => {
    const { state } = useLocation();
    console.log(state);
    return(
        <SContainer>
            <h2>ユーザ一覧です</h2>
            <SearchInput></SearchInput>
            <SUserArea>
            {users.map((user) => (
                <UserCard key={user.id} user={user}></UserCard>
            ))}
            </SUserArea>
        </SContainer>
    );
};

const SContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:24px;
`;


const SUserArea = styled.div`
    padding-top: 40px;
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    grid-gap: 20px;

`;

