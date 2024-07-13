import React from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = (props: any) => {
    const [showConsent, setShowConsent] = React.useState(true);

    React.useEffect(() => {
        setShowConsent(hasCookie("localConsent"));
    }, []);

    const acceptCookie = () => {
        setShowConsent(true);
        setCookie("localConsent", "true", {});
    };

    if (showConsent) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-transparent z-30 h-5">
            <div className="fixed bottom-0 w-full  flex flex-col md:flex-row items-center justify-center md:justify-around text-center mx-auto py-4 gap-5 bg-transparent/50">
                <span className="text-dark text-sm md:text-base">
                    Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. En
                    utilisant notre site, vous consentez à tous les cookies conformément à notre
                    politique de cookies.
                </span>
                <button
                    className="bg-gold-100 py-2 px-8 rounded text-white"
                    onClick={() => acceptCookie()}
                >
                    Accepter
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
