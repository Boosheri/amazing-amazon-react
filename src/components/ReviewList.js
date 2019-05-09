import React from 'react'
import { ReviewDetails } from './ReviewDetails'

export function ReviewList(props) {
    return (
        <ul>
            {props.reviews.map(review => {
                return (
                    <li>
                        {<ReviewDetails
                            body={review.body}
                            rating={review.rating}
                            created_at={review.created_at}
                            reviewer={{ full_name: review.reviewer.full_name }}
                        />}
                        <br />
                    </li>
                )
            })}
        </ul>

    )
}
