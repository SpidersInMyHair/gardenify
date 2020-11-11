
import React from 'react';
import { Row } from 'react-styled-flexboxgrid';
import { Avatar, SubTitle } from './product-details-two.style'
import UserImage from 'assets/images/user.svg';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { Input } from 'components/forms/input';

const Description = styled.div`
  margin-left: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`

const OuterRow = styled.div`
  background-color: white;
  border-radius: 6px;
  padding: 10px;
`
const InnerRow = styled(Row)`
  margin-left: 0!important;
  margin-right: 0!important;
`

type CommentsProps = {
    comments: any,
    user: any,
    handleComment: (r: number) => void
};

const Comments: React.FC<CommentsProps> = ({comments, user, handleComment}) => {
    const onSubmit = (values) => {
        console.log(values.comment_description)
        handleComment(values.comment_description)
    }
    return (
        <>
            <OuterRow>
                <InnerRow>
                    <Avatar><img src={user && user.image_url ? user.image_url : UserImage} /></Avatar>
                    <SubTitle style={{marginBottom: 0}}>{user && user.name ? user.name : "Anonymous User"}</SubTitle>
                </InnerRow>
                <InnerRow>
                    <Description>
                        <Formik 
                            onSubmit={onSubmit}
                            initialValues={{comment_description: ""}} 
                        >
                            {({
                                handleChange,
                                handleBlur
                            }) => (
                            <Form >
                                <Input onChange={handleChange} onBlur={handleBlur} name={"comment_description"} placeholder={"Leave a comment"} />
                            </Form>
                            )}
                        </Formik>
                    </Description>
                </InnerRow>
            </OuterRow>
            {comments && comments.map((comment, i) => (
                <OuterRow key={i}>
                    <InnerRow>
                        <Avatar><img src={comment.image_url ? comment.image_url : UserImage} /></Avatar>
                        <SubTitle style={{marginBottom: 0}}>{comment.name ? comment.name : "Anonymous User"}</SubTitle>
                    </InnerRow>
                    <InnerRow>
                        <Description>{comment.comment_description}</Description>
                    </InnerRow>
                </OuterRow>
            ))}
        </>
    )
}

export default Comments;