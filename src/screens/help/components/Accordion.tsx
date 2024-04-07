"use client";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionTitle,
    Container,
    Icon,
} from "@/UI/SUI";

interface MyAccordionProps {
    activeIndex: number;
    handleClick: (index: number) => void;
}

export default function MyAccordion({
    activeIndex,
    handleClick,
}: MyAccordionProps) {
    return (
        <Container>
            <Accordion
                fluid
                styled
                style={{
                    border: "2px solid #007397",
                }}
            >
                <AccordionTitle
                    style={{
                        borderBottom: "2px solid #007397",
                    }}
                    active
                >
                    Общая информация
                </AccordionTitle>
                <AccordionTitle
                    active={activeIndex === 0}
                    index={0}
                    onClick={() => handleClick(0)}
                >
                    <Icon name="dropdown" />
                    Что такое LION IT-SCHOOL и почему нам можно доверять?
                </AccordionTitle>
                <AccordionContent active={activeIndex === 0}>
                    <p>
                        LION IT-SCHOOL - это современное учебное заведение,
                        специализирующееся на обучении программированию и
                        информационным технологиям. Наша цель - подготовить
                        новое поколение конкурентоспособных специалистов в
                        области IT. Для достижения этой цели мы не только
                        передаем знания и навыки, но также развиваем вкус и
                        способность к нестандартному мышлению. Наши тренеры -
                        опытные практики в области IT, которые пристально следят
                        за потребностями студентов и внимательно относятся к
                        образовательным процессам. Перед началом обучения мы
                        заключаем договор публичной оферты и гарантируем
                        качество предоставляемых услуг.
                    </p>
                </AccordionContent>

                <AccordionTitle
                    active={activeIndex === 1}
                    index={1}
                    onClick={() => handleClick(1)}
                >
                    <Icon name="dropdown" />
                    Кто преподает в LION IT-SCHOOL и какой у них опыт?
                </AccordionTitle>
                <AccordionContent active={activeIndex === 1}>
                    <p>
                        В LION IT-SCHOOL все тренеры, ведущие обучение, обладают
                        высшим образованием в области программирования и имеют
                        обширный опыт работы в известных компаниях. Они являются
                        опытными разработчиками программного обеспечения,
                        специалистами по разработке приложений и веб-сайтов, а
                        также экспертами в различных областях программирования.
                        Кроме того, они регулярно повышают свою квалификацию,
                        участвуя в дополнительных образовательных программах, и
                        часто сами являются студентами курсов. Это не только
                        помогает им совершенствовать свои навыки, но и позволяет
                        получить уникальный опыт, ознакомившись с программой и
                        процессом обучения изнутри.
                    </p>
                </AccordionContent>

                <AccordionTitle
                    active={activeIndex === 2}
                    index={2}
                    onClick={() => handleClick(2)}
                >
                    <Icon name="dropdown" />
                    Меня возьмут на работу после ваших курсов?
                </AccordionTitle>
                <AccordionContent active={activeIndex === 2}>
                    <p>
                        В LION IT-SCHOOL мы стремимся обеспечить наших студентов
                        всем необходимым для успешного трудоустройства после
                        окончания курсов. Возможность получения работы зависит
                        от вас и вашей готовности к учебе, самосовершенствованию
                        и развитию навыков.
                    </p>
                    <p>Мы предоставляем следующую поддержку:</p>
                    <ul style={{ paddingLeft: "20px" }}>
                        <li>
                            Строим программы обучения, которые учитывают
                            современные тенденции в области программирования.
                        </li>
                        <li>
                            Приглашаем представителей компаний и студий на
                            защиту итоговых работ студентов.
                        </li>
                        <li>
                            Помогаем студентам создать качественное портфолио,
                            которое будет привлекательным для потенциальных
                            работодателей.
                        </li>
                        <li>
                            Регулярно публикуем вакансии от наших партнеров в
                            нашем студенческом чате.
                        </li>
                        <li>
                            Приглашаем представителей индустрии информационных
                            технологий на лекции, в том числе и на тему поиска
                            работы в современном мире.
                        </li>
                    </ul>
                    <p style={{ paddingTop: "14px" }}>
                        Однако, мы также подчеркиваем, что успешное
                        трудоустройство зависит от вашего собственного усердия,
                        стремления к успеху и активного участия в наших
                        программах обучения.
                    </p>
                </AccordionContent>
                <AccordionTitle
                    active={activeIndex === 3}
                    index={3}
                    onClick={() => handleClick(3)}
                >
                    <Icon name="dropdown" />
                    Как приобрести подарочный сертификат?
                </AccordionTitle>
                <AccordionContent active={activeIndex === 3}>
                    <p>
                        Обратиться к менеджерам отдела продаж по телефону или
                        написать нам на сайте или в любом удобном мессенджере.
                    </p>
                </AccordionContent>
            </Accordion>

            <Accordion
                fluid
                styled
                style={{ marginTop: "30px", border: "2px solid #007397" }}
            >
                <AccordionTitle
                    style={{
                        borderBottom: "2px solid #007397",
                    }}
                    active
                >
                    Вопросы по обучению
                </AccordionTitle>
                <AccordionTitle
                    active={activeIndex === 4}
                    index={4}
                    onClick={() => handleClick(4)}
                >
                    <Icon name="dropdown" />С какого возраста можно начать
                    обучение в LION IT-SCHOOL?
                </AccordionTitle>
                <AccordionContent active={activeIndex === 4}>
                    <p>
                        Средний возраст студента LION IT-SCHOOL — от 17 до 30+
                        лет. Но были случаи, когда у нас учились студенты
                        моложе.
                    </p>
                </AccordionContent>
                <AccordionTitle
                    active={activeIndex === 5}
                    index={5}
                    onClick={() => handleClick(5)}
                >
                    <Icon name="dropdown" />
                    Какие курсы подойдут для новичка?
                </AccordionTitle>
                <AccordionContent active={activeIndex === 5}>
                    <p>
                        Все экспресс-курсы, все курсы уровня Basic. Если вам
                        нужна дополнительная консультация, пишите нашим
                        менеджерам, и они помогут подобрать курс в соответствии
                        с вашими навыками.
                    </p>
                </AccordionContent>
                <AccordionTitle
                    active={activeIndex === 6}
                    index={6}
                    onClick={() => handleClick(6)}
                >
                    <Icon name="dropdown" />
                    Что я получаю после курса? Каков результат обучения?
                </AccordionTitle>
                <AccordionContent active={activeIndex === 6}>
                    <p>
                        Результат каждого семестра, независимо от уровня, —
                        оформленные проекты для вашего портфолио. В конце
                        каждого семестра студент получает сертификат о
                        прохождении курса и скидку на последующее обучение в
                        LION IT-SCHOOL на любом курсе. А еще — много
                        дополнительных материалов для самостоятельного изучения.
                    </p>
                </AccordionContent>
                <AccordionTitle
                    active={activeIndex === 7}
                    index={7}
                    onClick={() => handleClick(7)}
                >
                    <Icon name="dropdown" />
                    Можно ли брать индивидуальные занятия с тренером?
                </AccordionTitle>
                <AccordionContent active={activeIndex === 7}>
                    <p>Да, напишите нам, и мы согласуем для вас расписание.</p>
                </AccordionContent>
                <AccordionTitle
                    active={activeIndex === 8}
                    index={8}
                    onClick={() => handleClick(8)}
                >
                    <Icon name="dropdown" />
                    Онлайн-курс короче, чем офлайн-курс. Это как-то сказывается
                    на программе?
                </AccordionTitle>
                <AccordionContent active={activeIndex === 8}>
                    <p>
                        Можете быть уверены: программа онлайн-курса практически
                        ничем не отличается от офлайн-формата — она такая же
                        насыщенная, информативная и полезная.
                    </p>
                </AccordionContent>
            </Accordion>
        </Container>
    );
}
