import styles from "./Filter.module.scss";

interface FilterProps {
  id: string;
  label: string;
  checked: boolean;
  toggle: () => void;
  pickOnly?: () => void;
}

export const Filter = (props: FilterProps) => {
  return (
    <label htmlFor={props.id} className={styles.filter}>
      <input
        id={props.id}
        type="checkbox"
        onChange={props.toggle}
        checked={props.checked}
      />

      <span className={styles.checkmark} />
      {props.label}

      {props.pickOnly && (
        <button onClick={props.pickOnly} className={styles.pickOnlyBtn}>
          Только
        </button>
      )}
    </label>
  );
};
