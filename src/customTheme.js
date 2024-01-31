export const customTheme = {
  progress: {
    styles: {
      base: {
        container: {
          initial: {
            display: "flex",
            justifyContent: "flex-start",
            bg: "bg-blue-gray-50",
            overflow: "overflow-hidden",
            width: "w-full",
            fontFamily: "font-sans",
            borderRadius: "rounded-none",
            fontSize: "text-xs",
            fontWeight: "font-medium",
          },
          withLabel: {},
        },
        bar: {
          display: "flex",
          justifyContent: "justify-center",
          alignItems: "items-center",
          height: "h-full",
          overflow: "overflow-hidden",
          wordBreak: "break-all",
          borderRadius: "rounded-none",
        },
        variants: {
          filled: {
            "black": {
              backgroud: "#000000",
              color: "text-white",
            },
          },
        },
      },
    },
  },
};
