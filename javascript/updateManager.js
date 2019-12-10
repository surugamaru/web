/**
 * 指定された回数分を毎フレームで更新します
 * @param {Function} _onUpdate 更新する関数
 * @param {number} [_Count=0] 更新する回数を指定
 */
export function update(_onUpdate, _Count = 0) {
	if (_onUpdate && _Count) {
		_onUpdate();
		// 指定された回数更新（指定がなかった場合は常時更新）
		window.requestAnimationFrame(update.bind(this, _onUpdate, --_Count));
	}
}
