import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FadeIn } from '../ui/FadeIn';

export const RoutineScenarios: React.FC = () => {
    return (
        <SectionWrapper id="routine-scenarios" className="bg-gray-50" pageNumber={3}>
            <div className="max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-center">
                <FadeIn>
                    <div className="mb-10 pl-4 border-l-4 border-monimo-blue">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-monimo-black leading-tight">
                            일상적 소재 자서전적 기억 훈련 시나리오
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Scenario 01 */}
                    <FadeIn delay={100}>
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg">
                                    <i className="fa-solid fa-bus"></i>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Scenario 01: 출근길</h3>
                            </div>

                            <div className="space-y-6 text-[15px]">
                                {/* Bot Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-monimo-blue flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">다봄</div>
                                    <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 text-gray-700 leading-relaxed max-w-[90%]">
                                        삼성님, 오늘 아침 출근길은 어떠셨나요?<br />
                                        평소와 조금 달랐던 장면이 있었는지 궁금해요! 😊
                                    </div>
                                </div>

                                {/* User Message */}
                                <div className="flex gap-3 justify-end">
                                    <div className="bg-monimo-black rounded-2xl rounded-tr-none p-4 text-white leading-relaxed max-w-[90%]">
                                        그냥 평소랑 비슷했어. 특별한 건 없던데.
                                    </div>
                                </div>

                                {/* Analysis Tag */}
                                <div className="flex gap-2 items-center pl-11">
                                    <div className="flex items-center gap-1.5 text-purple-600 font-bold bg-purple-50 px-3 py-1.5 rounded-lg text-sm">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                        <span>분석 - 장소/대상 누락</span>
                                    </div>
                                </div>

                                {/* Bot Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-monimo-blue flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">다봄</div>
                                    <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 text-gray-700 leading-relaxed max-w-[90%]">
                                        그럼 <span className="font-bold text-gray-900">회사 정문 앞</span>을 지나실 때 보셨던 <span className="font-bold text-gray-900">가장 큰 차량이나 광고</span>는 무엇이었나요?
                                        <br /> 사소한 부분이라도 떠올려 보시겠어요?
                                    </div>
                                </div>

                                {/* User Message */}
                                <div className="flex gap-3 justify-end">
                                    <div className="bg-monimo-black rounded-2xl rounded-tr-none p-4 text-white leading-relaxed max-w-[90%]">
                                        아, 회사 앞 사거리에 아주 큰 빨간색 광역버스가 서 있었던 게 기억나네.
                                        <br />파란색 노선 번호도 본 것 같아.
                                    </div>
                                </div>

                                {/* Bot Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-monimo-blue flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">다봄</div>
                                    <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 text-gray-700 leading-relaxed max-w-[90%]">
                                        와, 역시 예리하시네요!<br />
                                        빨간 버스와 파란 글씨의 대비를 정확히 기억하고 계시는군요.<br />
                                        버스 엔진 소리가 크게 들렸나요?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Scenario 02 */}
                    <FadeIn delay={200}>
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg">
                                    <i className="fa-solid fa-utensils"></i>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Scenario 02: 점심 식사</h3>
                            </div>

                            <div className="space-y-6 text-[15px]">
                                {/* Bot Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-monimo-blue flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">다봄</div>
                                    <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 text-gray-700 leading-relaxed max-w-[90%]">
                                        삼성님, 점심 식사는 즐거우셨나요?
                                        <br /> 대화나 식당 분위기 중 가장 기분 좋았던 순간을 말씀해 주세요!
                                    </div>
                                </div>

                                {/* User Message */}
                                <div className="flex gap-3 justify-end">
                                    <div className="bg-monimo-black rounded-2xl rounded-tr-none p-4 text-white leading-relaxed max-w-[90%]">
                                        동료들이랑 근처 식당에서 맛있게 먹으면서 이런저런 수다 떨었지.
                                    </div>
                                </div>

                                {/* Analysis Tag */}
                                <div className="flex gap-2 items-center pl-11">
                                    <div className="flex items-center gap-1.5 text-purple-600 font-bold bg-purple-50 px-3 py-1.5 rounded-lg text-sm">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                        <span>분석 - 장소/구체적 대상 누락</span>
                                    </div>
                                </div>

                                {/* Bot Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-monimo-blue flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">다봄</div>
                                    <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 text-gray-700 leading-relaxed max-w-[90%]">
                                        정오쯤 방문하신 <span className="font-bold text-gray-900">그 식당</span>에서 드셨던 <span className="font-bold text-gray-900">메뉴 중 가장 색깔이 선명했던 음식</span>은<br />
                                        무엇인가요? 어떤 맛이나 향이 느껴졌나요?
                                    </div>
                                </div>

                                {/* User Message */}
                                <div className="flex gap-3 justify-end">
                                    <div className="bg-monimo-black rounded-2xl rounded-tr-none p-4 text-white leading-relaxed max-w-[90%]">
                                        돈가스였는데, 양배추 샐러드가 아주 싱싱했어.
                                        <br />드레싱이 노란색이라 눈에 띄었고 유자 향이 상큼하더라고.
                                    </div>
                                </div>

                                {/* Bot Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-monimo-blue flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">다봄</div>
                                    <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 text-gray-700 leading-relaxed max-w-[90%]">
                                        상큼한 유자 향이라니, 입맛이 도는 것 같아요!<br />
                                        그 샐러드 접시가 놓였던 위치가 왼쪽이었나요, 오른쪽이었나요?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionWrapper>
    );
};
