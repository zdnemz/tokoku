import Button from '@/components/elements/Button';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center w-full sm:w-fit relative">
      <input
        className="input min-w-72 w-[40vw!important]"
        type="search"
        placeholder="Temukan barang impianmu"
        autoComplete="off"
      />
      <Button className="absolute right-0">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </div>
  );
}
