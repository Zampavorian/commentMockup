import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author={Faker.name.firstName()}
                    time={"A few hours ago."} 
                    content={Faker.lorem.sentence()}
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard> 
            <ApprovalCard>
                <CommentDetail 
                    author={Faker.name.firstName()}
                    time={"A few hours ago."} 
                    content={Faker.lorem.sentence()}
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard> 
            <ApprovalCard>
                <CommentDetail 
                    author={Faker.name.firstName()}
                    time={"A few hours ago."} 
                    content={Faker.lorem.sentence()}
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard> 
            
        </div>
        

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));