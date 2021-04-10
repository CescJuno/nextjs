import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const styles = {
    layout: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
    }
};
export default class RootApp extends App {
    render() {
        const { Component, ...other } = this.props;
        return (
            <Container>
                <Head>
                    <title>Static Website</title>
                </Head>
                <div style={styles.layout}>
                    <Header />
                    <main style={styles.main}>
                        <Component {...other} />
                    </main>
                    <Footer />
                </div>
            </Container>
        );
    }
}