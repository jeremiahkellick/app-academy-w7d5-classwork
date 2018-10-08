import { connect } from 'react-redux';
import { createUser } from '../../actions/session';
import SignUp from './sign_up';

export default connect(null, { createUser })(SignUp);
