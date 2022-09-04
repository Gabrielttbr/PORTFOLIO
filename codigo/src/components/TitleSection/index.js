import React from "react";
import * as S from "./styled";

function TitleSection({titleWhite, titleOrage}){
    return (
        <div>
            <S.h1>
                {" "}
                {titleWhite}
                <span>{titleOrage}</span>
            </S.h1>
        </div>
    );
};
export default TitleSection;
