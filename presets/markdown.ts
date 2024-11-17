export default {
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        color: "#6b7280",
                        '[class~="lead"]': { color: "#374151" },
                        a: { color: "#2563eb" },
                        strong: { color: "#e5e7eb" },
                        "ul > li::before": { backgroundColor: "#9ca3af" },
                        hr: { borderColor: "#d1d5db" },
                        blockquote: {
                            color: "#e5e7eb",
                            borderLeftColor: "#3b82f6",
                            backgroundColor: "#374151",
                        },
                        h1: { color: "#f9fafb" },
                        h2: { color: "#f9fafb" },
                        h3: { color: "#f9fafb" },
                        h4: { color: "#f9fafb" },
                        code: {
                            color: "#3b82f6",
                            backgroundColor: "#374151",
                        },
                        "a code": { color: "#ec4899" },
                        pre: {
                            color: "#e5e7eb",
                            backgroundColor: "#374151",
                        },
                        thead: {
                            color: "#e5e7eb",
                            borderBottomColor: "#d1d5db",
                        },
                        "tbody tr": { borderBottomColor: "#e5e7eb" },
                    },
                },
            },
        },
    },
};