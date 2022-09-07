import React from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'
import "./Container.css";

const CommentSect = () => (
  <Comment.Group>
    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>Earnest Achayo</Comment.Author>
        <Comment.Text>This is just a comment!</Comment.Text>
        <Form reply>
          <Form.TextArea />
          <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            primary
          />
        </Form>
      </Comment.Content>
    </Comment>
    
  </Comment.Group>
)

export default CommentSect