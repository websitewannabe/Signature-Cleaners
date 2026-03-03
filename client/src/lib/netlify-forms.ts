type FormValues = Record<string, string>;

const NETLIFY_FORM_ENDPOINT = "/";

function toUrlEncoded(formName: string, values: FormValues) {
  return new URLSearchParams({
    "form-name": formName,
    ...values,
  }).toString();
}

export async function submitNetlifyForm(
  formName: string,
  values: FormValues
): Promise<boolean> {
  const response = await fetch(NETLIFY_FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: toUrlEncoded(formName, values),
  });

  return response.ok;
}

