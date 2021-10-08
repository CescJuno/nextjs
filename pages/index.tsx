import fp from 'lodash/fp';
//import { useSession, getSession } from "next-auth/client";
import { useDispatch, useSelector } from 'react-redux';
import { getTest, selectTotalPrice, setTotalPrice } from '../store/reducers/test/test';
import { useEffect, useRef,useState } from 'react';
import { createSelector } from 'reselect';
import { useAppSelector, useAppDispatch } from '../helper/hooks';
import { RootState } from '../store/store';
import Layout from '../components/layout';
import Head from 'next/head';
import { Container } from 'next/app';

const Index = () => {
  const didLoad = useRef();

  const price = useAppSelector(selectTotalPrice);
  const dispatch = useAppDispatch();
  
  return (
    <Layout>
      <Head>
        <title>Main</title>
      </Head>
      <Container><div onClick={()=>dispatch(setTotalPrice(3232))}>{price}</div></Container>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  return {
    props: {
      number: 0//context.req.session.num === undefined? 0 : context.req.session.num,
    },
  };
}
Index.getLayout = function getLayout(page) {
  return (`sdfsdf`
  )
}
export default Index;
