export default function guardrail(mathFunction) {
  let value;
  try {
    value = mathFunction();
  } catch (e) {
    value = String(e);
  }

  return [value, 'Guardrail was processed'];
}
