import React from 'react'
//import styles from "./textHolder.module.scss"
import styles from "../startPage.module.scss"
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

`

export const Text = styled.p`
   margin: 0px;
`

interface Props {
    header: string,
    text: string[],
}

const TextHolder = ({ header, text }: Props) => {

    const fastAnimation = [styles.heading, styles.fastAnimation].join(" ")
    const slowAnimation = [styles.heading, styles.slowAnimation].join(" ")

    return (
        <Container>
            <div className={header === "Hi there." ? fastAnimation : slowAnimation}>{header}</div>
            {text.map(content =>
                <Text>{content}</Text>)}
        </Container>
    )
}

export default TextHolder
