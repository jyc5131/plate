import { Path } from 'slate';
import { getEndPoint, isEndPoint, Value } from '../slate/index';
import { PlateEditor } from '../types/index';

export const isDocumentEnd = <V extends Value = Value>(
  editor: PlateEditor<V>
) => {
  if (editor.selection) {
    const point = editor.selection.focus;
    const endPoint = getEndPoint(editor, []);

    return (
      endPoint.offset === 0 &&
      isEndPoint(editor, point, point) &&
      Path.equals(Path.next(Path.parent(point.path)), endPoint.path)
    );
  }

  return false;
};
