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
        this.props.fetchPosts();
    }

    render() {
        const { users } = this.props;

        if(!users) {
            return <div className="container"><h1>Users</h1><h3>Loading...</h3></div>
        }

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
                        users.map(user => {
                            return <UserList
                                key={user._id}
                                id={user._id}
                                email={user.email}
                            />
                        })
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => {
            dispatch(getAllUsers()).then((response) => {
                !response.error ? dispatch(fetchUsers(response.data.user)) : null;
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);