import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers, fetchUsers } from '../../actions/users';

const UserList = ({
    id,
    email
}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{email}</td>
        </tr>
    )
}

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getAllUsers();
    }

    render() {
        const { users } = this.props;
        return(
            <table class="table">
                <thead>
                    <tr>
                      <th>#</th>
                      <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users ?
                        users.map(user => {
                            return <UserList
                                key={user._id}
                                id={user._id}
                                email={user.email}
                            />
                        }) : null
                    }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users
    }
}

export default connect(mapStateToProps, { getAllUsers })(Users);