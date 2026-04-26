import Contenedor from "../../components/Contenedor";
import FormularioParaItem from "../../components/FormularioParaItem";
import ListaDeCompras from "../../components/ListaDeCompras";
import Titulo from "../../components/Titulo";
import { useListaCompras } from "../../hooks/useListaCompras";

export default function App() {
  const {
    items,
    text,
    setText,
    addItem,
    toggleItem,
    removeItem,
  } = useListaCompras();

  return (
    <Contenedor>
      <Titulo />

      <FormularioParaItem
        text={text}
        setText={setText}
        addItem={addItem}
      />

      <ListaDeCompras
        items={items}
        onToggle={toggleItem}
        onRemove={removeItem}
      />
    </Contenedor>
  );
}