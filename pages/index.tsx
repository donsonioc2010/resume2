/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
import { Experience } from '../component/experience';
import { Footer } from '../component/footer';
import { Introduce } from '../component/introduce';
import { OpenSource } from '../component/openSource';
import { Presentation } from '../component/presentation';
import { Profile } from '../component/profile';
import { Project } from '../component/project';
import { Skill } from '../component/skill';
import { Style } from '../component/common/Style';
import Payload from '../payload';
import { Article } from '../component/article';
import { License } from '../component/license';

function Yosume() {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={Payload.profile} />
        <Introduce.Component payload={Payload.introduce} />
        <Skill.Component payload={Payload.skill} />
        <Experience.Component payload={Payload.experience} />
        <Project.Component payload={Payload.project} />
        {/* 오픈소스와 프레젠테이션의 경우엔 경험이 없기에 비활성화 처리 */}
        {/* <OpenSource.Component payload={Payload.openSource} /> */}
        <Presentation.Component payload={Payload.presentation} />
        {/* <Article.Component payload={Payload.article} /> */}
        <Education.Component payload={Payload.education} />
        <License.Component payload={Payload.license} />
        {/* Presentation을 ETC로 사용하고 진짜 etc를 숨김 */}
        {/* <Etc.Component payload={Payload.etc} /> */}
        {/* Footer를 지울까 하다가 이건 포크를 한 프로젝트라 일단 잔존함.. */}
        <Footer.Component payload={Payload.footer} />
      </Container>
    </>
  );
}

export default Yosume;
