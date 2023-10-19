import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import {
  Container1420,
  Center,
  Title,
  Card,
  CardHeader,
  CardCont,
  Grid,
  FreeBtn,
} from "../../styles/style";

const Package = () => {
  React.useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <section>
      <Container1420>
        <Center>
          <Title data-aos="fade-in">이용요금</Title>

          <Grid data-aos="fade-up" data-aos-delay="150">
            <Card>
              <CardHeader>
                <span className="tooltip">연간 결제 시 16% 할인</span>
                {/* tooltip - 300만원(VAT 별도) */}
                <h4>🌱 스탠다드 패키지</h4>
                <p>월 30만원으로 마케팅 고민 해결하세요</p>
                <h2>
                  300,000<span className="sm">원 / 월</span>
                  <span className="xs">VAT별도</span>
                </h2>
              </CardHeader>
              <CardCont>
                <ul>
                  <li>
                    골프연습장 <strong>전용 프로그램 제공</strong>
                    <br />
                    <span className="sm">(매출, 회원, 상담 관리)</span>
                  </li>
                  <li>
                    자영업 필수 플랫폼 <strong>개설 & 광고 세팅</strong>
                    <br />
                    <span className="sm">(네이버, 페이스북, 인스타그램)</span>
                  </li>
                  <li>
                    온라인용 <strong>디자인 제작</strong> 10건
                    <br />
                    <span className="sm">(광고 컨텐츠, 홍보용 이미지 등)</span>
                  </li>
                  <li>
                    월간 <strong>리포트 제공</strong>
                    <br />
                    <span className="sm">(성과보고, 맞춤 마케팅 제안)</span>
                  </li>
                </ul>
              </CardCont>
            </Card>
            <Card>
              <CardHeader>
                <span className="tooltip">연간 결제 시 16% 할인</span>
                {/* tooltip - 500만원(VAT 별도) */}
                <h4>💪 올인원 패키지</h4>
                <p>50만원으로 우리 동네 1등 골프연습장 되기!</p>
                <h2>
                  500,000<span className="sm">원 / 월</span>
                  <span className="xs">VAT별도</span>
                </h2>
              </CardHeader>
              <CardCont>
                <ul>
                  <li>
                    <span className="lg">
                      <span className="underline">스탠다드 패키지</span>의 모든
                      기능!
                    </span>
                  </li>
                  <li>
                    플랫폼 광고 세팅 <strong>당근마켓 추가</strong>
                  </li>
                  <li>
                    <strong>블로그리뷰</strong> 10건,{" "}
                    <strong>방문자리뷰</strong> 20건 추가
                  </li>
                  <li>
                    자체 <strong>홈페이지 개설 및 관리</strong>
                  </li>
                  <li>
                    디자인 제작 <strong>15건</strong>으로 확대
                  </li>
                </ul>
              </CardCont>
            </Card>
            <Card>
              <CardHeader>
                <span className="tooltip" style={{ marginRight: "10px" }}>
                  오픈매장 할인 월 80만원
                </span>
                <span className="tooltip">일시납부 시 30% 할인</span>
                {/* tooltip - 300만원(VAT 별도) */}
                <h4>🪜 빌드업 패키지</h4>
                <p>6개월 프로젝트, 온라인 마케팅이 처음인 분들께!</p>
                <h2>
                  1,000,000<span className="sm">원 / 월</span>
                  <span className="xs">VAT별도</span>
                </h2>
              </CardHeader>
              <CardCont>
                <ul>
                  <li>
                    <span className="lg">
                      <span className="underline">올인원 패키지</span>의 모든
                      기능!
                    </span>
                  </li>
                  <li>
                    매장 <strong>사진촬영 1회</strong>
                  </li>
                  <li>
                    <strong>전단지 제작 & 배포 1회 (8,000부)</strong>
                  </li>
                  <li>
                    포털사이트 지도 등록
                    <br />
                    <span>(네이버지도, 카카오맵, T맵, 구글, 페이스북)</span>
                  </li>
                  <li>
                    <strong>인스타그램 리뷰</strong>(3건) &{" "}
                    <strong>파워블로거 리뷰</strong>(3건)
                  </li>
                </ul>
              </CardCont>
            </Card>
          </Grid>

          <div style={{marginTop: "100px"}}>
            <FreeBtn data-aos="fade-in">
              <Link href="/moregolf">자세히보기</Link>
            </FreeBtn>
          </div>
        </Center>
      </Container1420>
    </section>
  );
};
export default Package;
