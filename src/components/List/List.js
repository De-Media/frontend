import React from 'react';
import { Poll } from '../Poll';
import { Post } from '../Post';

const List = ({ items }) => {
	return (
		<div>
			{items?.map((i, k) => {
				if (i.isPoll)
					return (
						<Poll
							key={k}
							text={i?.description}
							options={i?.options}
							selected={i?.selected}
						/>
					);
				else
					return (
						<Post
							key={k}
							title={i.title}
							text={i.description}
							options={i.options}
							selected={i.selected}
							flag={i.flag}
						/>
					);
			})}
		</div>
	);
};

export default List;
