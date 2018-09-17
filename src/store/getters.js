/**
 * Created by Kaway on 2018/9/16.
 */

const getter = {
  username: state => state.login.username,
  session_id: state => state.login.session_id,
  user_photo: state => state.login.user_photo,
  user_gender: state => state.login.user_gender,
};

export default getter;
