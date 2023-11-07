import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = props => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{props.title}</h2>

      <ul className={css.statList}>
        {props.stats.map(stat => (
          <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export function groupByLabel(data) {
  return data.reduce((acc, item) => {
    const label = item.label;

    const entry = acc.find(entry => entry.label === label);
    if (entry) {
      entry.percentage += item.percentage;
    } else {
      acc.push({
        id: item.id,
        percentage: item.percentage,
        label,
      });
    }

    return acc;
  }, []);
}
