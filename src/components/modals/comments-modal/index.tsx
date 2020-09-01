import React from 'react';

import css from './comments-modal.module.scss';
import { Rating } from '../../ui/rating';

export const CommentsModal: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.element}>
        <img className={css.close} src="/static/img/svg/close.svg" alt="close" />

        <h3> View Johnny Dep’s reviews (50)</h3>

        <div className={css.comments}>
          <div className={css.line}>
            <div className={css.photo}>
              <div>
                <img src="/static/img/people/Eleanor.png" alt="avatar" />
              </div>
              <p>Eleanor Pena</p>
            </div>

            <p className={css.time}>16.07.2020 2:12 pm</p>

            <div className={css.text}>
              <Rating count={5} activeVal={1} />
              <p>Nulla Lorem mollit cupidatat irure!</p>
            </div>
          </div>

          <div className={css.line}>
            <div className={css.photo}>
              <div>
                <img src="/static/img/people/Davon.png" alt="avatar" />
              </div>
              <p>Devon Lane</p>
            </div>

            <p className={css.time}>16.07.2020 2:12 pm</p>

            <div className={css.text}>
              <Rating count={5} activeVal={3} />
              <p>
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                exercitation incididunt aliquip deserunt reprehenderit elit laborum.{' '}
              </p>
            </div>
          </div>

          <div className={css.line}>
            <div className={css.photo}>
              <div>
                <img src="/static/img/people/Kile.png" alt="avatar" />
              </div>
              <p>Kile Johnson</p>
            </div>

            <p className={css.time}>16.07.2020 2:12 pm</p>

            <div className={css.text}>
              <Rating count={5} activeVal={5} />
              <p>
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                exercitation incididunt aliquip deserunt reprehenderit elit laborum.{' '}
              </p>
            </div>
          </div>

          <div className={css.line}>
            <div className={css.photo}>
              <div>
                <img src="/static/img/people/Kile.png" alt="avatar" />
              </div>
              <p>Kile Johnson</p>
            </div>

            <p className={css.time}>16.07.2020 2:12 pm</p>

            <div className={css.text}>
              <Rating count={5} activeVal={5} />
              <p>
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                exercitation incididunt aliquip deserunt reprehenderit elit laborum.{' '}
              </p>
            </div>
          </div>

          <div className={css.line}>
            <div className={css.photo}>
              <div>
                <img src="/static/img/people/Kile.png" alt="avatar" />
              </div>
              <p>Kile Johnson</p>
            </div>

            <p className={css.time}>16.07.2020 2:12 pm</p>

            <div className={css.text}>
              <Rating count={5} activeVal={5} />
              <p>
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                exercitation incididunt aliquip deserunt reprehenderit elit laborum.{' '}
              </p>
            </div>
          </div>

          <div className={css.line}>
            <div className={css.photo}>
              <div>
                <img src="/static/img/people/Kile.png" alt="avatar" />
              </div>
              <p>Kile Johnson</p>
            </div>

            <p className={css.time}>16.07.2020 2:12 pm</p>

            <div className={css.text}>
              <Rating count={5} activeVal={5} />
              <p>
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                exercitation incididunt aliquip deserunt reprehenderit elit laborum.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
