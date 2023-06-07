function AboutProject() {
  return (
    <section className="aboutProject">

      <h1 className="aboutProject__header">О проекте</h1>
      <div className="aboutProject__decorate"></div>
      <article className="aboutProject__article">
        <h2 className="aboutProject__header">Дипломный проект включал 5 этапов</h2>
        <p className="aboutProject__paragraph">Составление плана, работу над бэкендом,
          вёрстку, добавление функциональности и финальные доработки.</p>
      </article>
      <article className="aboutProject__article">
        <h2 className="aboutProject__header">На выполнение диплома ушло 5 недель</h2>
        <p className="aboutProject__paragraph">У каждого этапа был мягкий и жёсткий дедлайн,
          которые нужно было соблюдать, чтобы успешно защититься.</p>
      </article>

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