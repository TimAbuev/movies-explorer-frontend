function AboutProject() {
  return (
    <section className="aboutProject" id="abPro">

      <h2 className="aboutProject__header">О проекте</h2>
      <div className="aboutProject__decorate"></div>
      <div className="aboutProject__container">
        <article className="aboutProject__article">
          <h3 className="aboutProject__header aboutProject__header_mod_h3">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__paragraph">Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className="aboutProject__article">
          <h3 className="aboutProject__header aboutProject__header_mod_h3">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__paragraph">У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>

      <table className="aboutProject__table">
        <tr className="aboutProject__table-row">
          <th className="aboutProject__table-header aboutProject__table-header_side_left">1 неделя</th>
          <th className="aboutProject__table-header aboutProject__table-header_side_right">4 недели</th>
        </tr>
        <tr className="aboutProject__table-row">
          <td className="aboutProject__table-data">Back-end</td>
          <td className="aboutProject__table-data">Front-end</td>
        </tr>
      </table>

    </section>
  );
}
export default AboutProject;