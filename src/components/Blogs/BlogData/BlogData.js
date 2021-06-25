import { Button } from 'react-bootstrap';
import React from 'react';

function BlogData(props) {
    const {
        title,
        description,
        type,
    } = props.blog;
    // console.log(props.Blog);

    return (
        <>
            <tr>
                <td>{title}</td>
                <td>{description}</td>
                <tb>{props.children}</tb>
            </tr>

        </>

    );
}

export default BlogData;