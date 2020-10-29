import s from 'styled-components'

export const NewPostForm = s.form`
  background: rgb(255, 255, 255);
  border-radius: 4px;
  margin-bottom: 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 18px;
  padding: 2rem;
`
export const NewPostNameInput = s.input`
  display: block;
  width: 100%;
  line-height: 1.5;
  color: rgb(0, 0, 0);
  box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0) 0px 0px 0px 0px;
  margin-bottom: 1rem !important;
  font-size: 1rem !important;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-image: initial;
  background: padding-box rgb(255, 255, 255);
  transition: all 200ms ease 0s;
  border-radius: 3px !important;
  padding: 0.5rem 0.75rem !important;
`
export const NewPostContentInput = s.input`
  display: block;
  width: 100%;
  line-height: 4;
  color: rgb(0, 0, 0);
  box-sizing: border-box;
  box-shadow: rgba(255, 255, 255, 0) 0px 0px 0px 0px;
  margin-bottom: 1rem !important;
  font-size: 1rem !important;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-image: initial;
  background: padding-box rgb(255, 255, 255);
  transition: all 200ms ease 0s;
  border-radius: 3px !important;
  padding: 0.5rem 0.75rem !important;
  height: '20%';
`
export const CommentBox = s.div`
  background: rgb(255, 255, 255);
  padding: 1rem;
  transition: all 200ms ease 0s;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px;
`

export const ReplyBox = s.div`
  background: rgb(255, 255, 255);
  padding: 1rem;
  transition: all 200ms ease 0s;
  border-radius: 0px;
  overflow: hidden;
  margin-bottom: 2rem;
  border-left: 4px solid rgba(0, 0, 0, 0.1);
`
export const VotingContainer = s.div`
  flex-direction: column;
  width: 24px;
  -webkit-box-align: center;
  align-items: center;
  float: right;
`
export const CommentTitle = s.p`
  color: rgb(13, 95, 248);
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 0.4rem;
`
export const CommentContent = s.p`
  color: rgba(0,0,0,.8);
  font-weight: 400;
  font-size: 20px;
`

export const ReplyButton = s.button`
  padding: 0;
  border: none;
  background: none;
  color: grey;
`