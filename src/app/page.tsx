const imgCinemaliceTheater1Red0303X1 = "/img/image01.png";
const img202505072023381 = "/img/sns-posts-figma.svg";
const img011 = "/img/character-mascot-figma.svg";
const imgIconColorL = "/img/icon-left.svg";
const imgIconColorR = "/img/icon-right.svg";
const imgKanaLogo = "/img/kana-logo-figma.svg";
const img1 = "/img/main-logo-figma.svg";
const imgText = "/img/text-icon.svg";
const imgText1 = "/img/text-icon.svg";
const img = "/img/mail-icon.svg";
const img2 = "/img/mail-icon.svg";
const imgVector = "/img/underline.svg";
const img3 = "/img/sns-facebook.svg";
const img4 = "/img/sns-instagram.svg";
const img5 = "/img/sns-x.svg";

interface ButtonProps {
  text?: string;
  showIconColorL?: boolean;
  showIconColorR?: boolean;
}

function Button({
  text = "ボタンテキスト",
  showIconColorL = true,
  showIconColorR = true,
}: ButtonProps) {
  return (
    <div
      className="relative rounded-[48px] w-full h-full"
      data-name="type=primary-fill,state=default"
      id="node-128_7606"
    >
      <div className="flex flex-row items-center justify-center max-w-inherit relative w-full h-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center max-w-inherit px-8 py-2 relative w-full h-full">
          {showIconColorL && (
            <div
              className="relative shrink-0 w-6 h-6"
              data-name="icon-color-L"
              id="node-128_7607"
            >
              <img
                alt=""
                className="block max-w-none w-full h-full"
                src={imgIconColorL}
              />
            </div>
          )}
          <div
            className="basis-0 font-zen-kaku-gothic-new font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left"
            id="node-128_7608"
          >
            <p className="block leading-[1.8]">{text}</p>
          </div>
          {showIconColorR && (
            <div
              className="relative shrink-0 w-4 h-4"
              data-name="icon-color-R"
              id="node-128_7609"
            >
              <img
                alt=""
                className="block max-w-none w-full h-full"
                src={imgIconColorR}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="bg-light-green-100 relative w-full min-h-screen"
      data-name="phese1-teaser-pat2"
      id="node-515_9021"
    >
      <div
        className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[1280px]"
        id="node-515_9022"
      >
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-[1280px]">
          <div className="relative shrink-0 w-full" id="node-515_9023">
            <div className="box-border content-stretch flex flex-col gap-14 items-center justify-start p-0 relative w-full">
              <div className="relative shrink-0 w-full" id="node-515_9024">
                <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative w-full">
                  <div className="relative shrink-0 w-full" id="node-515_9025">
                    <div className="flex flex-col items-center relative w-full h-full">
                      <div className="box-border content-stretch flex flex-col gap-14 items-center justify-start px-[120px] py-20 relative w-full">
                        <div className="relative shrink-0" id="node-515_9026">
                          <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative">
                            <div
                              className="relative shrink-0"
                              id="node-515_9027"
                            >
                              <div className="box-border content-stretch flex flex-row gap-0.5 items-end justify-start p-0 relative">
                                <div
                                  className="relative shrink-0"
                                  id="node-515_9028"
                                >
                                  <div className="box-border content-stretch flex flex-row font-zen-kaku-gothic-antique font-bold items-center justify-start leading-[0] not-italic p-0 relative text-[#000000] text-center whitespace-nowrap tracking-[2px]">
                                    <div
                                      className="relative shrink-0 text-[22px]"
                                      id="node-515_9029"
                                    >
                                      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                                        神保町
                                      </p>
                                    </div>
                                    <div
                                      className="relative shrink-0 text-[18px]"
                                      id="node-515_9030"
                                    >
                                      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                                        ・
                                      </p>
                                    </div>
                                    <div
                                      className="relative shrink-0 text-[22px]"
                                      id="node-515_9031"
                                    >
                                      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                                        お茶の水
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="font-zen-kaku-gothic-new font-bold leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center whitespace-nowrap tracking-[2px]"
                                  id="node-515_9032"
                                >
                                  <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                                    エリアに
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="relative shrink-0"
                              id="node-515_9033"
                            >
                              <div className="box-border content-stretch flex flex-row gap-4 items-start justify-center p-0 relative">
                                <div
                                  className="font-zen-kaku-gothic-new font-bold h-12 leading-[0] not-italic relative shrink-0 text-[#000000] text-[32px] text-center tracking-[2px] w-[406px]"
                                  id="node-515_9034"
                                >
                                  <p className="adjustLetterSpacing block leading-[1.5]">
                                    新たな映画館が誕生します
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0" id="node-515_9035">
                          <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center p-0 relative">
                            <div
                              className="h-[39px] overflow-hidden relative shrink-0 w-[212px]"
                              data-name="kana-logo"
                              id="node-515_9036"
                            >
                              <img
                                alt=""
                                className="block max-w-none w-full h-full"
                                src={imgKanaLogo}
                              />
                            </div>
                            <div
                              className="h-[46px] overflow-hidden relative shrink-0 w-[570px]"
                              data-name="logo"
                              id="node-515_9039"
                            >
                              <div
                                className="absolute bottom-0 left-0 right-[-0.006%] top-[-0.012%]"
                                data-name="レイヤー 1"
                                id="node-515_9040"
                              >
                                <img
                                  alt=""
                                  className="block max-w-none w-full h-full"
                                  src={img1}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0" id="node-515_9042">
                          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
                            <div
                              className="bg-beige-900 h-px shrink-0 w-[100px]"
                              id="node-515_9043"
                            />
                            <div
                              className="font-zen-kaku-gothic-new font-bold leading-[0] not-italic relative shrink-0 text-beige-900 text-[20px] text-center whitespace-nowrap tracking-[2px]"
                              id="node-515_9044"
                            >
                              <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
                                小さくても善いものを
                              </p>
                            </div>
                            <div
                              className="bg-beige-900 h-px shrink-0 w-[100px]"
                              id="node-515_9045"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#ffffff] relative rounded-[20px] shrink-0"
                    id="node-515_9046"
                  >
                    <div className="absolute border-4 border-red-600 border-solid inset-0 pointer-events-none rounded-[20px]" />
                    <div className="flex flex-col items-center relative w-full h-full">
                      <div className="box-border content-stretch flex flex-col gap-10 items-center justify-start p-[80px] relative">
                        <div
                          className="relative shrink-0 w-[550px]"
                          id="node-515_9047"
                        >
                          <div className="box-border content-stretch flex flex-col gap-10 items-center justify-start p-0 relative w-[550px]">
                            <div
                              className="relative shrink-0 w-full"
                              id="node-515_9048"
                            >
                              <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative w-full">
                                <div
                                  className="relative shrink-0 w-full"
                                  id="node-515_9049"
                                >
                                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative w-full">
                                    <div
                                      className="relative shrink-0"
                                      id="node-515_9050"
                                    >
                                      <div className="box-border content-stretch flex flex-col gap-1 items-center justify-start p-0 relative">
                                        <div
                                          className="relative shrink-0"
                                          data-name="title"
                                          id="node-515_9051"
                                        >
                                          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
                                            <div
                                              className="h-6 relative shrink-0 w-5"
                                              data-name="text"
                                              id="node-515_9052"
                                            >
                                              <img
                                                alt=""
                                                className="block max-w-none w-full h-full"
                                                src={imgText}
                                              />
                                            </div>
                                            <div
                                              className="font-zen-kaku-gothic-new font-bold leading-[0] not-italic relative shrink-0 text-beige-900 text-[20px] text-left whitespace-nowrap tracking-[2px]"
                                              id="node-515_9055"
                                            >
                                              <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
                                                クラウドファンディングを実施します
                                              </p>
                                            </div>
                                            <div className="flex items-center justify-center relative shrink-0">
                                              <div className="flex-none transform rotate-180 scale-y-[-1]">
                                                <div
                                                  className="h-6 relative w-5"
                                                  data-name="text"
                                                  id="node-515_9056"
                                                >
                                                  <img
                                                    alt=""
                                                    className="block max-w-none w-full h-full"
                                                    src={imgText1}
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="bg-center bg-cover bg-no-repeat h-[186px] shrink-0 w-80"
                                  data-name="Cinemalice_Theater-1_Red+@0.3@0.3x 1"
                                  id="node-515_9060"
                                  style={{
                                    backgroundImage: `url('${imgCinemaliceTheater1Red0303X1}')`,
                                  }}
                                />
                                <div
                                  className="css-ymfocn font-zen-kaku-gothic-new font-medium leading-[1.8] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-beige-900 text-[16px] text-center tracking-[2px]"
                                  id="node-515_9061"
                                  style={{ width: "min-content" }}
                                >
                                  <p className="block mb-0">
                                    開業に向けたクラウドファンディングを開始します。
                                  </p>
                                  <p className="block">
                                    支援についてはクラウドファンディングのページでご覧ください。
                                  </p>
                                </div>
                                <div
                                  className="bg-red-button max-w-[290px] relative rounded-[48px] shrink-0"
                                  data-name="button"
                                  id="node-515_9062"
                                >
                                  <Button text="クラウドファンディングのプロジェクトを見る" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-light-green-100 relative shrink-0 w-full"
                data-name="news"
                id="node-515_9063"
              >
                <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative w-full">
                  <div className="relative shrink-0 w-full" id="node-515_9067">
                    <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative w-full">
                      <div
                        className="relative shrink-0 w-full"
                        data-name="title"
                        id="node-515_9068"
                      >
                        <div className="flex flex-col items-center justify-center relative w-full h-full">
                          <div className="box-border content-stretch flex flex-col items-center justify-center px-20 py-0 relative w-full">
                            <div
                              className="font-zen-kaku-gothic-new font-bold leading-[0] not-italic relative shrink-0 text-[#000000] text-[24px] text-center whitespace-nowrap tracking-[2px]"
                              id="node-515_9069"
                            >
                              <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
                                スタッフ募集のお知らせ
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative shrink-0 w-[710px]"
                        data-name="news-list"
                        id="node-515_9070"
                      >
                        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-[710px]">
                          <div
                            className="bg-[#ffffff] relative rounded-[20px] shrink-0 w-full"
                            data-name="news-item/PC"
                            id="node-515_9071"
                          >
                            <div className="relative w-full h-full">
                              <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-[16px] relative w-full">
                                <div
                                  className="basis-0 grow min-h-px min-w-px relative shrink-0"
                                  id="node-515_9082"
                                >
                                  <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative w-full">
                                    <div
                                      className="relative shrink-0 w-full"
                                      id="node-515_9083"
                                    >
                                      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
                                        <div
                                          className="css-ymfocn font-zen-kaku-gothic-new font-bold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-beige-900 text-[16px] text-left tracking-[2px] w-full"
                                          id="node-515_9084"
                                        >
                                          <p className="block leading-[1.8]">
                                            シネマリスではスタッフを募集します。のようなお知らせのタイトル。
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="relative shrink-0 w-full"
                                      id="node-515_9085"
                                    >
                                      <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-0 relative w-full">
                                        <div
                                          className="font-zen-kaku-gothic-new font-medium leading-[0] min-w-full not-italic relative shrink-0 text-beige-900 text-[16px] text-left tracking-[2px]"
                                          id="node-515_9086"
                                          style={{ width: "min-content" }}
                                        >
                                          <p className="block leading-[1.8]">
                                            運営スタッフの募集をします。
                                            <br className="" />
                                            などの文章が入ります。文章が入ります。文章が入ります文章が入ります文章が入ります文章が入ります。
                                          </p>
                                        </div>
                                        <div
                                          className="relative shrink-0"
                                          id="node-515_9087"
                                        >
                                          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative">
                                            <div
                                              className="relative shrink-0"
                                              id="node-515_9088"
                                            >
                                              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative text-beige-900 text-left tracking-[2px]">
                                                <div
                                                  className="font-zen-kaku-gothic-new font-bold h-[29px] relative shrink-0 text-[16px] w-[678px]"
                                                  id="node-515_9089"
                                                >
                                                  <p className="adjustLetterSpacing block leading-[1.8]">
                                                    業務内容
                                                  </p>
                                                </div>
                                                <div
                                                  className="font-zen-kaku-gothic-new font-medium relative shrink-0 text-[14px] whitespace-nowrap"
                                                  id="node-515_9090"
                                                >
                                                  <p className="adjustLetterSpacing block leading-[1.8] whitespace-pre">
                                                    業務内容についての文章
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="relative shrink-0 w-full"
                                              id="node-515_9091"
                                            >
                                              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative text-beige-900 text-left tracking-[2px] w-full">
                                                <div
                                                  className="font-zen-kaku-gothic-new font-bold h-[29px] relative shrink-0 text-[16px] w-[678px]"
                                                  id="node-515_9092"
                                                >
                                                  <p className="adjustLetterSpacing block leading-[1.8]">
                                                    勤務場所や給与形態など
                                                  </p>
                                                </div>
                                                <div
                                                  className="font-zen-kaku-gothic-new font-medium leading-[1.8] min-w-full relative shrink-0 text-[14px]"
                                                  id="node-515_9093"
                                                  style={{
                                                    width: "min-content",
                                                  }}
                                                >
                                                  <p className="block mb-0">
                                                    スタッフ募集についての文章が入ります。スタッフ募集についての文章が入ります。スタッフ募集についての文章が入ります。
                                                  </p>
                                                  <p className="block">
                                                    スタッフ募集についての文章が入ります。スタッフ募集についての文章が入ります。スタッフ募集についての文章が入ります。スタッフ募集についての文章が入ります。スタッフ募集についての文章が入ります。スタッフ募集についての文章が入ります。
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" id="node-515_9095">
                <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative">
                  <div
                    className="font-zen-kaku-gothic-new font-bold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#000000] text-[18px] text-center tracking-[2px]"
                    id="node-515_9096"
                    style={{ width: "min-content" }}
                  >
                    <p className="block mb-0">最新情報はこちらから</p>
                    <p className="block">ご確認ください</p>
                  </div>
                  <div
                    className="bg-[length:104.71%_103.5%] bg-[43.75%_35.71%] bg-no-repeat h-[400px] shrink-0 w-[340px]"
                    data-name="スクリーンショット 2025-05-07 20.23.38 1"
                    id="node-515_9097"
                    style={{ backgroundImage: `url('${img202505072023381}')` }}
                  />
                </div>
              </div>
              <div className="relative shrink-0" id="node-515_9099">
                <div className="box-border content-stretch flex flex-col gap-10 items-center justify-start p-0 relative">
                  <div className="relative shrink-0" id="node-515_9100">
                    <div className="box-border content-stretch flex flex-row gap-1 items-end justify-start p-0 relative">
                      <div
                        className="bg-center bg-cover bg-no-repeat h-12 shrink-0 w-[68px]"
                        data-name="01_キャラクターイラスト(大) 1"
                        id="node-515_9101"
                        style={{ backgroundImage: `url('${img011}')` }}
                      />
                      <div className="relative shrink-0" id="node-515_9102">
                        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative">
                          <div className="relative shrink-0" id="node-515_9103">
                            <div className="flex flex-row items-center relative w-full h-full">
                              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-4 pr-0 py-0 relative">
                                <div
                                  className="relative shrink-0 w-6 h-6"
                                  data-name="mail"
                                  id="node-515_9104"
                                >
                                  <div
                                    className="absolute bottom-[17.778%] left-[8.756%] mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.50003px_-4.5px] mask-size-[24px_24px] right-[12.078%] top-[19.722%]"
                                    data-name="mail"
                                    id="node-I515_9104-3_352"
                                    style={{ maskImage: `url('${img}')` }}
                                  >
                                    <img
                                      alt=""
                                      className="block max-w-none w-full h-full"
                                      loading="lazy"
                                      src={img2}
                                    />
                                  </div>
                                </div>
                                <div
                                  className="font-zen-kaku-gothic-new font-medium leading-[0] not-italic relative shrink-0 text-beige-900 text-[16px] text-left whitespace-nowrap tracking-[2px]"
                                  id="node-515_9105"
                                >
                                  <p className="adjustLetterSpacing block leading-[1.8] whitespace-pre">
                                    メールでのお問い合わせ
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="h-[7px] relative shrink-0 w-[258px]"
                            data-name="Vector"
                            id="node-515_9106"
                          >
                            <div className="absolute bottom-[-7.143%] left-[-0.016%] right-[-0.014%] top-[-7.142%]">
                              <img
                                alt=""
                                className="block max-w-none w-full h-full"
                                loading="lazy"
                                src={imgVector}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" id="node-515_9107">
                    <div className="box-border content-stretch flex flex-row gap-10 items-center justify-start p-0 relative">
                      <div
                        className="overflow-hidden relative shrink-0 w-8 h-8"
                        data-name="SNS-icon select"
                        id="node-515_9108"
                      >
                        <div
                          className="absolute left-0 w-10 h-10 top-0"
                          data-name="Exclude"
                          id="node-I515_9108-172_30967"
                        >
                          <img
                            alt=""
                            className="block max-w-none w-full h-full"
                            loading="lazy"
                            src={img3}
                          />
                        </div>
                      </div>
                      <div
                        className="relative shrink-0 w-8 h-8"
                        data-name="SNS-icon select"
                        id="node-515_9109"
                      >
                        <div
                          className="absolute left-0 w-10 h-10 top-0"
                          data-name="Exclude"
                          id="node-I515_9109-172_30975"
                        >
                          <img
                            alt=""
                            className="block max-w-none w-full h-full"
                            loading="lazy"
                            src={img4}
                          />
                        </div>
                      </div>
                      <div
                        className="overflow-hidden relative rounded-[36px] shrink-0 w-8 h-8"
                        data-name="SNS-icon select"
                        id="node-515_9110"
                      >
                        <div
                          className="absolute inset-0 overflow-hidden"
                          data-name="Logo 2"
                          id="node-I515_9110-172_30979"
                        >
                          <div
                            className="absolute bottom-0 contents left-0 right-[-0.002%] top-0"
                            data-name="Logo"
                            id="node-I515_9110-172_30980"
                          >
                            <div
                              className="absolute bottom-0 left-0 right-[-0.002%] top-0"
                              data-name="Logo"
                              id="node-I515_9110-172_30981"
                            >
                              <img
                                alt=""
                                className="block max-w-none w-full h-full"
                                loading="lazy"
                                src={img5}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" id="node-515_9111">
                <div className="flex flex-col items-center relative w-full h-full">
                  <div className="box-border content-stretch flex flex-col gap-10 items-center justify-start px-0 py-10 relative w-full">
                    <div
                      className="font-zen-kaku-gothic-new font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-center whitespace-nowrap tracking-[2px]"
                      id="node-515_9112"
                    >
                      <p className="adjustLetterSpacing block leading-[1.8] whitespace-pre">
                        ©シネマリス︎
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}