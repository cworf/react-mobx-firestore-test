import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column'
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
    marginBottom: '20px'
	},
	checkbox: {
		marginLeft: 16,
		width: 40
	},
	input: {
		flex: 1
	},
	icon: {
		marginRight: 6
	}
};

class Post extends Component {
	static propTypes = {
		post: PropTypes.any
	};

	render() {
		const {post} = this.props;
		const {title, text} = post.data;

		return (
			<Paper>
				<div style={styles.row}>
					<TextField
						id={post.id}
            name='text'
						style={styles.input}
						placeholder='Post Content...'
						onChange={this.onTextChange}
						value={text || ''} />
					<TextField
						id={post.id}
            name='title'
						style={styles.input}
						placeholder='Post Title...'
						onChange={this.onTextChange}
						value={title || ''} />
          <h3>{text}</h3>
          <h3>{title}</h3>
				</div>
			</Paper>
		);
	}

	onTextChange = async(event) => {
    const newValue = event.target.value;
    const name = event.target.name;
		const {post} = this.props;
		await post.update({
			[name]: newValue
		});
	};
}

export default observer(Post);
